class Table < ApplicationRecord
  EMAIL_REGEXP = /\A[^@\s]+@[^@\s]+\z/

  serialize :inputs

  validates :email, :name, :inputs, :rows, :columns, presence: true
  validates_format_of :email, with: EMAIL_REGEXP
end
