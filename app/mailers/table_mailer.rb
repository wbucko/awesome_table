class TableMailer < ApplicationMailer
  def send_table(table)
    @table = TableDecorator.new(table)

    mail(
      to: @table.email,
      subject: 'Your table has arrived!'
    )
  end
end
