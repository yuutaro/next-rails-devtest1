class Api::V1::Current::ArticlesController < Api::V1::BaseController
  before_action :authenticate_user!

  def create
    #.firstで現在のユーザーが保有している未保存記事を取得。nilでない場合、unsaved_articleに代入
    unsaved_article = current_user.articles.unsaved.first || current_user.articles.create!(status: :unsaved)
    render json: unsaved_article
  end
end