// const { google } = require('googleapis');
// const keys = require('./credentials.json');

// const client = new google.auth.JWT(
//   keys.client_email,
//   null,
//   keys.private_key,
//   ['https://www.googleapis.com/auth/spreadsheets']
// );

// // ID da planilha e range da última linha
// const spreadsheetId = '1TsYHgoWVp8JMzyioWMWQGe-ueGpus0WEDkYdgsKzSno';
// const range = 'A:A';

// // Novos valores para a última linha
// const newValues = ['carro', 'moto', 'caminhao', 'van'];

// // Adiciona os novos valores na última linha
// google.sheets({ version: 'v4', auth: client }).spreadsheets.values.append({
//   spreadsheetId,
//   range,
//   valueInputOption: 'RAW',
//   insertDataOption: 'INSERT_ROWS',
//   resource: {
//     values: [newValues],
//   },
// }, (err, res) => {
//   if (err) return console.log(`Erro ao adicionar os valores: ${err}`);
//   console.log(`Valores adicionados com sucesso!`);
// });


//CÓDIGO DE PROCURA



const { google } = import('googleapis');
const keys = import('./credentials.json');

function procuraInfos(valor) {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const spreadsheetId = '1TsYHgoWVp8JMzyioWMWQGe-ueGpus0WEDkYdgsKzSno';
  const range = 'A1:AL';

  google.sheets({ version: 'v4', auth: client }).spreadsheets.values.get({
    spreadsheetId,
    range,
  }, (err, res) => {
    if (err) return console.log(`Erro ao ler a planilha: ${err}`);
    const rows = res.data.values;
    const searchValue = valor;
    const columnIndexF = 5; // Coluna F
    const columnIndexes = [34, 35, 36, 37]; // Colunas AI a AL
    const row = rows.find(row => row[columnIndexF] === searchValue);
    if (row) {
      const values = columnIndexes.reduce((obj, index) => {
        obj[index] = row[index];
        return obj;
      }, {});
      console.log(`Os valores de AI a AL para a placa ${searchValue} são:`, values);
    } else {
      console.log(`Não foi possível encontrar a placa ${searchValue}`);
    }
  });
}




        // function procuraInfos() {
        //     const script = document.createElement('script');
        //     script.src = 'https://apis.google.com/js/api.js';
        //     script.onload = async () => {
        //         const { google } = await import('googleapis');
        //         const keys = await import('./novo dhl 1/credentials.json');
        //         const client = new google.auth.JWT(
        //             keys.client_email,
        //             null,
        //             keys.private_key,
        //             ['https://www.googleapis.com/auth/spreadsheets']
        //         );

        //         const spreadsheetId = '1TsYHgoWVp8JMzyioWMWQGe-ueGpus0WEDkYdgsKzSno';
        //         const range = 'A1:AL';

        //         const response = await google.sheets({ version: 'v4', auth: client }).spreadsheets.values.get({
        //             spreadsheetId,
        //             range,
        //         });

        //         const rows = response.data.values;
        //         const searchValue = 'asd1132';
        //         const columnIndexF = 5; // Coluna F
        //         const columnIndexes = [34, 35, 36, 37]; // Colunas AI a AL
        //         const row = rows.find(row => row[columnIndexF] === searchValue);

        //         if (row) {
        //             const values = columnIndexes.reduce((obj, index) => {
        //                 obj[index] = row[index];
        //                 return obj;
        //             }, {});
        //             console.log(`Os valores de AI a AL para a placa ${searchValue} são:`, values);
        //         } else {
        //             console.log(`Não foi possível encontrar a placa ${searchValue}`);
        //         }
        //     };

        // }