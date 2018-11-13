class Table < ApplicationRecord
  validates :email, :name, :inputs, presence: true
end
