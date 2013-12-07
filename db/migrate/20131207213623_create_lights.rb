class CreateLights < ActiveRecord::Migration
  def change
    create_table :lights do |t|
      t.string :name
      t.boolean :lit

      t.timestamps
    end
  end
end
