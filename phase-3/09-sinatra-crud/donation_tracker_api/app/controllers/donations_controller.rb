class DonationsController < ApplicationController
    get '/donations' do
      Donation.all.to_json
    end

    post '/donations' do
      Donation.create(
        amount: params[:amount],
        completed: params[:completed],
        date: params[:date],
        donor: current_user,
        organization_id: params[:organization_id]
      ).to_json
    end

    delete '/donations/:id' do
      Donation.find(params[:id]).destroy
    end

    patch '/donations/:id/edit' do
      Donation.find(params[:id]).update(
        amount: params[:amount],
        date: params[:date]
      ).to_json
    end
end