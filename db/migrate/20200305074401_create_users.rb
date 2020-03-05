class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.float :current_balance, default: 0.0, null: false
      t.float :available_cash, default: 100000.0, null: false
      t.datetime :created_date, null: false
      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["session_token"], name: "index_users_on_session_token", unique: true
      t.timestamps
    end
  end
end
