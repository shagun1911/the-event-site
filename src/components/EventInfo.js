import React from 'react';

const EventInfo = () => {
  return (
    <section className="flex justify-around py-16 bg-gray-100 text-center">
      <div>
        <h2 className="text-2xl font-bold">WHERE</h2>
        <p className="text-lg">Downtown Conference Center, New York</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">WHEN</h2>
        <p className="text-lg">10-12 December</p>
      </div>
    </section>
  );
};

export default EventInfo;
