import Lead from '../models/Lead.js';

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private/Lead Manager or Admin
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a lead (Contact Form)
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    const createdLead = await lead.save();
    res.status(201).json(createdLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update lead status
// @route   PUT /api/leads/:id
// @access  Private/Lead Manager or Admin
const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (lead) {
      lead.status = req.body.status || lead.status;
      if (req.body.note !== undefined) lead.note = req.body.note;
      if (req.body.message !== undefined) lead.message = req.body.message;
      const updatedLead = await lead.save();
      res.json(updatedLead);
    } else {
      res.status(404);
      throw new Error('Lead not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a lead
// @route   DELETE /api/leads/:id
// @access  Private/Lead Manager or Admin
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (lead) {
      await Lead.deleteOne({ _id: lead._id });
      res.json({ message: 'Lead removed' });
    } else {
      res.status(404);
      throw new Error('Lead not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Export leads to CSV
// @route   GET /api/leads/export/csv
// @access  Private/Lead Manager or Admin
const exportLeadsCSV = async (req, res) => {
  try {
    const leads = await Lead.find({}).lean();
    if (leads.length === 0) {
      return res.status(404).json({ message: 'No leads found to export' });
    }

    const fields = ['name', 'phone', 'email', 'message', 'interest', 'status', 'createdAt'];
    let csvStr = fields.join(',') + '\n';

    leads.forEach((lead) => {
      const row = fields.map((field) => {
        let val = lead[field] ? lead[field].toString() : '';
        val = val.replace(/"/g, '""'); // escape double quotes
        return `"${val}"`;
      });
      csvStr += row.join(',') + '\n';
    });

    res.header('Content-Type', 'text/csv');
    res.attachment('leads.csv');
    return res.send(csvStr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getLeads, createLead, updateLead, deleteLead, exportLeadsCSV };
