class OrganizationsController < ApplicationController
  get '/organizations' do
    Organization.all.to_json
  end

  get '/organizations/:id' do
    Organization.find(params[:id]).to_json(include: :donors)
  end
end