
 const alimentos = [
    {
        "id": 1,
        "name": "Old prince 15 kg",
        "price": "1500",
        "img": "https://dami2390.github.io/mascotasfelices/img/alimento1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        "id": 2,
        "name": "Maintenance Criador 22 kg",
        "price": "2500",
        "img": "https://dami2390.github.io/mascotasfelices/img/alimento2.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    }
];

 const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(alimentos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch