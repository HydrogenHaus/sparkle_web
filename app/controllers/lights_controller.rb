class LightsController < ApplicationController

  def index 
    @lights = Light.all
    respond_to do |format|
      format.html # index.html.haml
      format.json { render json: @lights}
    end
  end

  def new
    @light = Light.new
  end

  def show
    @light = Light.find(params[:id])
    respond_to do |format| 
      format.html { render :layout => "mobile" }
      format.json { render :json => @light } 
    end
  end

  # POST /lights
  # POST /lights.json
  def create
    @light = Light.new(light_params)

    respond_to do |format|
      if @light.save
        format.html { redirect_to lights_path, notice: 'Light was successfully created.' }
        format.json { render action: 'show', status: :created, location: @light }
      else
        format.html { render action: 'new' }
        format.json { render json: @light.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lights/1
  # DELETE /lights/1.json
  def destroy
    @light = Light.find(params[:id])
    @light.destroy
    respond_to do |format|
      format.html { redirect_to lights_url }
      format.json { head :no_content }
    end
  end

  # PATCH/PUT /lights/1
  # PATCH/PUT /lights/1.json
  def update
    @light = Light.find(params[:id])
    respond_to do |format|
      if @tile.update(tile_params)
        format.html { redirect_to @tile, notice: 'Tile was successfully updated.' }
        format.json { render nothing: true, status: 204 }
      else
        format.html { render action: 'edit' }
        format.json { render json: @tile.errors, status: :unprocessable_entity }
      end
    end
  end



  private
    def light_params
      params.require(:light).permit( :name, :lit)
    end

end