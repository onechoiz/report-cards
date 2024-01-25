const fs = require('fs');

const inputFilePath = './class7Data.json';
const outputFilePath = './new.json';

// Read the original JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    try {
        const originalData = JSON.parse(data);
        const transformedData = transformData(originalData);

        // Write the transformed data to the output file
        fs.writeFile(outputFilePath, JSON.stringify(transformedData, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the output file:', err);
            } else {
                console.log('Conversion successful. Output written to', outputFilePath);
            }
        });
    } catch (parseError) {
        console.error('Error parsing the input JSON:', parseError);
    }
});

// Function to transform the data
function transformData(originalData) {

   const transformedData = originalData.map((student, index) => {
  return {
    id: index + Math.random(),
    specialKey: Math.random() + Date.now(),
    class: student.Class,
    chineseName: student.chineseName,
    pinyinName: student.pinyinName,
    englishName: student.englishName,
    teacherFeedback: student.teacherFeedback,
    exams: {
      term1: [
        { type: "total score", score: student.percent },
        { type: "listening", score: student.Listening, max: 20 },
        { type: "writing", score: student.Writing, max: 20 },
        { type: "general paper", score: student["General Paper"], max: 40 }
      ]
    }
  };
});

console.log(JSON.stringify(transformedData, null, 2));

    return transformedData;
}
