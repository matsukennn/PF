class ChangeColumnToUserHealth < ActiveRecord::Migration[5.2]
  def change
    
    change_column :user_healths, :condition, :text

  end
end
