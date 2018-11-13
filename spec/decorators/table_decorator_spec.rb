require 'rails_helper'

RSpec.describe TableDecorator do
  let(:table) { build_stubbed(:table) }
  subject { described_class.new(table) }

  describe '#formatted_inputs' do
    it 'returns formatted array', :aggregate_failures do
      expect(subject.formatted_inputs).to be_kind_of(Array)
      expect(subject.formatted_inputs).to eq([['1a!', '1b!', '1c!'], ['2a!', '2b!', '2c!']])
    end
  end
end
