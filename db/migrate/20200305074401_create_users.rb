class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.string :first_name
      t.string :last_name
      t.float :current_balance
      t.float :available_cash
      t.dateTime :created_date

      t.timestamps
    end
  end
end
