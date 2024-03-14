class Article < ApplicationRecord
  belongs_to :user
  enum status: { unsaved: 10, draft: 20, published: 30 }, _prefix: true
  validates :title, :content, presence: true, if: :published?

  private

    def verify_only_unsaved_status_is_allowed
      if unsaved? && user.articles.unsaved.present?
        raise StandardError, "未保存の記事は複数保有できません"
      end
    end
end
