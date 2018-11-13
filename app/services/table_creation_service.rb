class TableCreationService
  def initialize(params)
    @params = params
  end

  def call
    create_table_record
    email_table
  end

  private

  attr_reader :params, :table

  def create_table_record
    @table ||= Table.create!(
      email:   params['email'],
      name:    params['name'],
      rows:    params['rows'],
      columns: params['columns'],
      inputs:  params['inputs'].to_h
    )
  end

  def email_table
    TableMailer.send_table(table).deliver_later
  end
end
