require 'rails_helper'

RSpec.describe TableMailer, type: :mailer do
  let(:table) { build_stubbed(:table) }

  describe 'send_table' do
    subject { described_class.send_table(table) }

    it 'renders the headers', :aggregate_failures do
      expect(subject.subject).to eq('Your table has arrived!')
      expect(subject.to).to eq([table.email])
    end

    it 'renders body', :aggregate_failures do
      expect(subject.body.encoded).to match(table.name)
      expect(subject.body.encoded).to match(table.inputs['0,0'])
      expect(subject.body.encoded).to match(table.inputs['1,0'])
    end
  end
end
