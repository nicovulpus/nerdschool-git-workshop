const people = [
<<<<<<< HEAD
    { firstname: 'Arne', lastname: 'Arnesen' },
    { firstname: 'Magnus', lastname: 'Magnusson' },
    { firstname: 'Siri', lastname: 'Sirisen' },
=======
    { firstname: 'Magnus', lastname: 'Magnusson' },
>>>>>>> feature-branch-4
    { firstname: 'Stefan', lastname: 'Stefanson' },
]

export const greeting = (firstname: string, lastname: string) => {
<<<<<<< HEAD
    console.log(`Hello ${firstname} ${lastname}`);
=======
    console.log(`Hei hei ${firstname} ${lastname}`);
>>>>>>> feature-branch-4
}

export const greetTheGang = () => {
    people.forEach((person) => {
        greeting(person.firstname, person.lastname);
    });
}