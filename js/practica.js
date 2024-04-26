const users = [
    {
        name: 'Angelina Jolie:',
        text: 'Actriz, directora, productora y activista humanitaria estadounidense, reconocida por sus papeles en películas como "Girl, Interrupted"'
        
    },
    {
        name: 'Beyoncé',
        text: 'Cantante, compositora y actriz estadounidense conocida por su éxito en la industria musical y su impacto cultural.'
      
    },
    {
        name: 'Elon Musk',
        text: 'Empresario y magnate sudafricano-estadounidense, fundador de SpaceX, Tesla, Inc. y otras empresas tecnológicas',
    },
    {
        name: 'Dwayne "The Rock" Johnson',
        text: 'Actor y ex luchador profesional estadounidense, conocido por sus papeles en películas de acción y por ser una figura destacada.'
       
    },
    {
        name: 'Rihanna:',
        text: 'Cantante, compositora y actriz de Barbados, reconocida por su éxito en la música pop y por su influencia en la moda y la cultura.'
    },
    {
        name: 'Cristiano Ronaldo',
        text: ' Futbolista portugués considerado uno de los mejores jugadores de fútbol de todos los tiempos, conocido por su éxito en clubes'
    },
    {
        name: 'Taylor Swift:',
        text: 'Cantante y compositora estadounidense, una de las artistas más influyentes en la música pop contemporánea'
    },
    {
        name: 'Emma Watson',
        text: 'Actriz británica, conocida por su papel como Hermione Granger en la serie de películas de Harry Potter'
    },
    {
        name: 'Leonardo DiCaprio',
        text: 'es un actor y productor estadounidense nacido el 11 de noviembre de 1974 en Los Ángeles, California.'
    },
    {
        name: 'Lionel Messi',
        text: ' Futbolista argentino considerado uno de los mejores jugadores de fútbol de todos los tiempos, conocido por su habilidad excepcional'
    },
];

const userCardsContainer = document.getElementById('userCardsContainer');

users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('col-md-6', 'mb-3');

    // Configurar el contenido del card
    card.innerHTML = `
      <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p>${user.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
</div>
    `;
    // Agregar el card al contenedor
    userCardsContainer.appendChild(card);
});
