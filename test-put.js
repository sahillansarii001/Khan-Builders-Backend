import axios from 'axios';

async function testPut() {
  try {
    const res = await axios.put('http://localhost:5000/api/properties/6a2a7a60a76e4944db405e0e', { status: 'Available' });
    console.log('Success:', res.data);
  } catch (err) {
    console.error('Error:', err.response ? err.response.data : err.message);
  }
}
testPut();
