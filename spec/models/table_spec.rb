require 'rails_helper'

RSpec.describe Table, type: :model do
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:inputs) }
  it { is_expected.to validate_presence_of(:rows) }
  it { is_expected.to validate_presence_of(:columns) }
  it { is_expected.to serialize(:inputs) }

  describe 'email format validation' do
    context 'with proper email' do
      let(:table) { build(:table) }

      it 'is valid' do
        expect(table.valid?).to be_truthy
      end
    end

    context 'with invalid email' do
      let(:table) { build(:table, email: 'aa@') }

      it 'is invalid' do
        expect(table.valid?).to be_falsy
      end
    end
  end
end
