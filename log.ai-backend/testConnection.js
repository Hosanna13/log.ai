const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('Connection URI:', process.env.MONGO_URI);
        
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('✅ MongoDB Connection Successful');
        console.log('Database Name:', mongoose.connection.db.databaseName);
        
        // Test by creating a simple document
        const TestSchema = new mongoose.Schema({
            test: String,
            createdAt: { type: Date, default: Date.now }
        });
        const TestModel = mongoose.model('ConnectionTest', TestSchema);
        
        const testDoc = new TestModel({ test: 'Connection Test' });
        const savedDoc = await testDoc.save();
        
        console.log('✅ Test document created:', savedDoc);
        
        // Close the connection
        await mongoose.connection.close();
    } catch (error) {
        console.error('❌ Connection Error:', error);
    }
}

testConnection();