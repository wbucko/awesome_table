module Api
  module V1
    class TablesController < ActionController::API
      def create
        TableCreationService.new(table_params).call

        render json: { status: :ok }

      rescue => err
        render json: { status: 418, error: err.message }
      end

      private

      def table_params
        params.permit(:columns, :rows, :email, :name, inputs: {})
      end
    end
  end
end
