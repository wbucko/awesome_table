class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table :tables do |t|
      t.string :name
      t.string :email
      t.jsonb :inputs

      t.timestamps
    end
  end
end
