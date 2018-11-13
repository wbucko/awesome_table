class AddRowsAndColumnsToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :tables, :rows, :integer
    add_column :tables, :columns, :integer
  end
end
