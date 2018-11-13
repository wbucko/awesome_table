FactoryBot.define do
  factory :table do
    name    { 'My Super Table' }
    email   { 'some@email.com' }
    rows    { 2 }
    columns { 3 }
    inputs  {
      {
        '0,0' => '1a!',
        '0,1' => '1b!',
        '0,2' => '1c!',
        '1,0' => '2a!',
        '1,1' => '2b!',
        '1,2' => '2c!'
      }
    }
  end
end
