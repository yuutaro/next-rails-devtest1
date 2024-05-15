class Api::V1::ArticlesController < Api::V1::BaseController

    def index
      # 公開中の記事のレコードのみ且つ作成日順且つ1ページにつき10個取得かつUserレコードを全て取得
     articles = Article.published.order(created_at: :desc).page(params[:page] || 1).per(10).includes(:user)
     render json: articles
    end
  
  def show
    article = Article.published.find(params[:id])
    render json: article
  end
end