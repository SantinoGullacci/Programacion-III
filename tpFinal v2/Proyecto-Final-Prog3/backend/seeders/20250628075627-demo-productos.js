'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Productos', [
      {
        nombre: 'Mouse Logitech G203',
        descripcion: 'Mouse gamer RGB',
        categoria: 'Periféricos',
        stock: 30,
        precio: 9500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Teclado Redragon Kumara K552',
        descripcion: 'Teclado mecánico compacto',
        categoria: 'Periféricos',
        stock: 20,
        precio: 18500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Monitor Samsung 24"',
        descripcion: 'Full HD 75Hz',
        categoria: 'Monitores',
        stock: 15,
        precio: 88000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Auriculares HyperX Cloud Stinger',
        descripcion: 'Auriculares gamer con micro',
        categoria: 'Audio',
        stock: 18,
        precio: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'SSD Kingston 240GB',
        descripcion: 'Unidad sólida SATA III',
        categoria: 'Almacenamiento',
        stock: 25,
        precio: 21000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Disco Duro Seagate 1TB',
        descripcion: 'HDD 3.5" 7200RPM',
        categoria: 'Almacenamiento',
        stock: 12,
        precio: 34000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Placa de Video GTX 1660 Super',
        descripcion: '6GB GDDR6',
        categoria: 'Componentes',
        stock: 5,
        precio: 280000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Procesador Ryzen 5 5600G',
        descripcion: '6 núcleos con gráficos integrados',
        categoria: 'Componentes',
        stock: 7,
        precio: 145000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Memoria RAM 8GB DDR4 3200MHz',
        descripcion: 'Kingston Fury',
        categoria: 'Memorias',
        stock: 22,
        precio: 28000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Fuente EVGA 600W 80+',
        descripcion: 'Fuente de alimentación',
        categoria: 'Componentes',
        stock: 10,
        precio: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Gabinete Aerocool Bolt Mini',
        descripcion: 'Micro ATX con RGB',
        categoria: 'Gabinetes',
        stock: 8,
        precio: 46000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Webcam Logitech C270',
        descripcion: 'HD 720p',
        categoria: 'Periféricos',
        stock: 14,
        precio: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Router TP-Link Archer C6',
        descripcion: 'Router WiFi AC1200',
        categoria: 'Redes',
        stock: 9,
        precio: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Impresora HP 2375',
        descripcion: 'Multifunción a tinta',
        categoria: 'Impresoras',
        stock: 6,
        precio: 69000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Notebook Lenovo IdeaPad 3',
        descripcion: 'i3 8GB 256GB SSD',
        categoria: 'Notebooks',
        stock: 4,
        precio: 480000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cooler CPU Cooler Master Hyper 212',
        descripcion: 'Disipador con fan',
        categoria: 'Componentes',
        stock: 7,
        precio: 38000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Switch TP-Link 8 Puertos',
        descripcion: 'Switch Ethernet 10/100/1000',
        categoria: 'Redes',
        stock: 11,
        precio: 32000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cámara de Seguridad WiFi',
        descripcion: 'IP HD exterior',
        categoria: 'Seguridad',
        stock: 10,
        precio: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Mousepad Redragon P003',
        descripcion: 'Grande gamer',
        categoria: 'Periféricos',
        stock: 16,
        precio: 7500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cable HDMI 1.5m',
        descripcion: 'Alta velocidad',
        categoria: 'Cables',
        stock: 40,
        precio: 3500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};