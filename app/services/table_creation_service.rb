class TableCreationService
  attr_reader :error

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
      email:  params['email'],
      name:   params['name'],
      inputs: params['inputs'].to_json
    )
  end

  def email_table
    TableMailer.send_table(table)
  end
end
