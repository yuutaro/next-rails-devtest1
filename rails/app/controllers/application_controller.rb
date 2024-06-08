# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include DeviseHackFakeSession

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  #新規アカウント登録時にnameを保存
  def configure_permitted_parameters
    devise_parameter_santizer.permit(:sign_up, keys: [:name])
  end
end
