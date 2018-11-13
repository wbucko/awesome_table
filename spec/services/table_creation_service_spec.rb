require 'rails_helper'

RSpec.describe TableCreationService do
  subject { described_class.new(params).call }
  let(:params) { attributes_for(:table).with_indifferent_access }
  let(:mailer) { double(:mailer) }

  describe '#call' do
    it 'creates new record' do
      expect { subject }.to change { Table.count }.by(1)
    end

    it 'sends emails' do
      expect(TableMailer).to receive(:send_table).and_return(mailer)
      expect(mailer).to receive(:deliver_later)
      subject
    end
  end
end
