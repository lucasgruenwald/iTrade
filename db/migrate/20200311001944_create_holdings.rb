class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.integer :user_id, null: false
      t.string :stock_ticker, null: false
      t.integer :share_count, null: false

      t.timestamps
    end
  end
end
