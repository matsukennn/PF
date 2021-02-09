class User < ApplicationRecord
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
      
         
  has_many :user_healths
  has_many :rooms
  has_many :messages, dependent: :destroy
  
  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :last_name_kana, presence: true
  validates :first_name_kana, presence: true
  validates :gender, presence: true
  validates :age, inclusion: { in: 1..99 }
  validates :postcode, presence: true, length: { is: 7 }
  validates :address_city, presence: true
  validates :address_street, presence: true
  validates :address_building, presence: true
  validates :phone_number, presence: true, length: { in: 10..11 }
  validates :email, presence: true
  validates :encrypted_password, presence: true

  def self.search(search)
    if search
        User.where(['first_name_kana LIKE? OR last_name_kana LIKE? OR phone_number LIKE?', "%#{search}%","%#{search}%","%#{search}%"])
    else
        User.all
    end
  end
  
  def full_name
    self.last_name + self.first_name
  end
  
  def full_name_kana
    self.last_name_kana + self.first_name_kana
  end

end
