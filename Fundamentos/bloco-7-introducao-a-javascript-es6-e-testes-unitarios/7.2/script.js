const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
	// Adicione abaixo as informações necessárias.
	const nome = order.order.delivery.deliveryPerson;
	const remetente = order.name;
	const phone = order.phoneNumber;
	const endereco = order.address.street;
	const numberHouse = order.address.number;
	const apt = order.address.apartment;
	console.log(`Olá ${nome}, entrega para: ${remetente}, Telefone: ${phone}, ${endereco}, Nº: ${numberHouse}, AP: ${apt}`);

};
customerInfo(order);



const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
	order.newName = 'Luiz Silva';
	order.payment.newPrice = 50;
	const pedido = Object.keys(order.order.pizza);
	const beverage = order.order.drinks.coke.type;

	console.log(`Olá ${order.newName}, o total do seu pedido de ${pedido[0]},${pedido[1]} e ${beverage} é R$ ${order.payment.newPrice}`);
}

orderModifier(order);


