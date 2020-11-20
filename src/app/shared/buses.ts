import { Bus } from './bus';

export const BUSES: Bus[] =[
    {
      id: '1',
      name: 'FALGUNIMODHUMOTI PARIBAHAN',
      coachno: '201',
      from: 'DHK',
      to: 'KHU',
      status: 'Non AC',
      startingPoint: 'Gulistan',
      endpoint: 'RoyalChattar',
      departuretime: '6:15 AM',
      arrivaltime: '11:35 PM',
      seatsavailable: '36',
      price: '500.00',
      tripavailability: true
      
    },
    {
        id: '2',
        name: 'FALGUNIMODHUMOTI PARIBAHAN',
        coachno: '203',
        from: 'DHK',
        to: 'KHU',
        status: 'Non AC',
        startingPoint: 'Gulistan',
        endpoint: 'RoyalChattar',
        departuretime: '7:15 AM',
        arrivaltime: '12:35 PM',
        seatsavailable: '29',
        price: '500.00',
        tripavailability: false
        
      },
      {
        id: '3',
        name: 'GREEN LINE',
        coachno: '730',
        from: 'DHK',
        to: 'CHI',
        status: 'AC',
        startingPoint: 'Razarbagh',
        endpoint: 'GEC CIRCLE',
        departuretime: '7:15 AM',
        arrivaltime: '12:35 PM',
        seatsavailable: '20',
        price: '1000.00',
        tripavailability: true
        
      },
];