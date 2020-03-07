import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'p1',
      address: '3503 N Campbell Ave Suite 501, Tucson, AZ 85719',
      name: 'Tucson Shelter',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Inauguration_Day-_Starting_the_day_with_some_community_service_at_Mary%27s_Place%2C_a_day_shelter_for_homeless_women_and_their_children_%2812003868066%29.jpg/120px-Inauguration_Day-_Starting_the_day_with_some_community_service_at_Mary%27s_Place%2C_a_day_shelter_for_homeless_women_and_their_children_%2812003868066%29.jpg',
      beds: 3,
      
    }
    
  ];

  return <UsersList items={USERS} />;
};

export default Users;
