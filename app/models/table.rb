class Table < ApplicationRecord
  serialize :inputs

  validates :email, :name, :inputs, presence: true
end
