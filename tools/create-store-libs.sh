# Feature List
nx g @nrwl/angular:lib --directory=store feature-list \
    --routing --parentModule=apps/store/src/app/app.module.ts --lazy --style=scss
nx g @nrwl/angular:component game-list --project=store-feature-list --style=scss

# Feature Details
nx g @nrwl/angular:lib --directory=store feature-details \
    --routing --parentModule=apps/store/src/app/app.module.ts --lazy --style=scss
nx g @nrwl/angular:component game-details --project=store-feature-details --style=scss

# Feature Cart
nx g @nrwl/angular:lib --directory=store feature-cart --style=scss
nx g @nrwl/angular:component cart --project=store-feature-cart --export --style=scss

# UI Formatters
nx g @nrwl/angular:lib --directory=store ui-formatters --style=scss
nx g @nrwl/angular:pipe currency --project=store-ui-formatters --export
nx g @nrwl/angular:pipe rating --project=store-ui-formatters --export

# Data Access Games
nx g @nrwl/angular:lib --directory=store data-access-games --style=scss
nx g @nrwl/angular:service games --project=store-data-access-games

# Data Access Cart
nx g @nrwl/angular:lib --directory=store data-access-cart --style=scss
nx g @nrwl/angular:service cart --project=store-data-access-cart
