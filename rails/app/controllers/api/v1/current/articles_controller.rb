class Api::V1::Current::ArticlesController < Api::V1::BaseController
  before_action :authenticate_user!

  def index
      #未保存以外の記事を取得
      articles = current_user.articles.not_unsaved.order(created_at: :desc)
      render json: articles
  end

  def create
    # .firstで現在のユーザーが保有している未保存記事を取得。nilでない場合、unsaved_articleに代入
    unsaved_article = current_user.articles.unsaved.first || current_user.articles.create!(status: :unsaved)
    render json: unsaved_article
  end

  def update
    article = current_user.articles.find(params[:id])
    article.update!(article_params)
    render json: article
  end

  private
    def article_params
      params.require(:article).permit(:title, :content, :status)
    end
end