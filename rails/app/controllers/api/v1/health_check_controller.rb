# frozen_string_literal: true

module Api
  module V1
    # Health Check Controller
    class HealthCheckController < ApplicationController
      def index
        current_time = Time.now
        render json: { message: "fetch at #{current_time}" }, status: :ok
      end
    end
  end
end
