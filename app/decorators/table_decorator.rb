class TableDecorator < SimpleDelegator
  def formatted_inputs
    inputs.sort.map { |x| x[1] }.each_slice(columns).to_a
  end
end
