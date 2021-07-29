const newEmployees = () => {
  const employees = {
    // Criar uma função que recebe o nome como parâmetro
    id1: employeeGenerator('Pedro Guerra'),  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGenerator('Carla Paiva')  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// Criar a função que gera o nome e o email
const employeeGenerator = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
}
// Retornar a função principal usando como parâmetro a que cria o nome./
console.table(newEmployees(employeeGenerator));
