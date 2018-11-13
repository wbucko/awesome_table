class TableDecorator < SimpleDelegator
  def formatted_inputs
    inputs.values.each_slice(columns).to_a
  end
end
