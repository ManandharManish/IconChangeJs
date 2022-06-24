let data = [
    {
        name: 'Manish',
        age: '27',
    },

    {
        name: 'Manisha',
        age: '22',
    },

    {
        name: 'Manoz',
        age: '27',
    },

    {
        name: 'Sabin',
        age: '27',
    },

    {
        name: 'Muna',
        age: '27',
    },
    {
        name: 'Manisha',
        age: '22',
    },

    {
        name: 'Manoz',
        age: '27',
    },

    {
        name: 'Sabin',
        age: '27',
    },

    {
        name: 'Muna',
        age: '27',
    }

];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return '<div>'+'My name is '+ item.name + '.'+'I am ' + item.age +' year old'+ '</div>';
    
});

info.innerHTML =details.join('\n');