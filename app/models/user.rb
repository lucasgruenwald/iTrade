# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  current_balance :float            default("0.0")
#  available_cash  :float            default("100000.0")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :first_name, :last_name, :password_digest, presence: true
    validates :session_token, :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 8, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :holdings,
    foreign_key: :user_id,
    class_name: :Holding 

    # has_many: watchings 
    # has_many: transactions 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
