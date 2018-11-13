require 'rails_helper'

RSpec.describe Api::V1::TablesController do
  let(:response_body) { JSON.parse response.body }

  describe 'POST #create' do
    subject { post :create, as: :json, params: params }

    context 'with valid params' do
      let(:params) { attributes_for(:table).with_indifferent_access }

      before { subject }

      it { expect(response).to have_http_status(:ok) }
    end

    context 'with invalid params' do
      let(:params) { attributes_for(:table, email: nil).with_indifferent_access }

      before { subject }

      it { expect(response_body['status']).to eq(418) }
      it { expect(response_body['error']).to match('Validation failed') }
    end
  end
end
