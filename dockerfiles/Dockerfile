# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
FROM plone/frontend-builder:${VOLTO_VERSION} as builder

ARG ADDON_NAME
ARG ADDON_PATH

ENV THEME='@redturtle/volto-comuni-chiamo'

# Copy helper.py as /setupAddon
COPY dockerfiles/helper.py /setupAddon

# Copy addon code
COPY --chown=node:node ./ /app/src/addons/${ADDON_PATH}/

# Install
RUN <<EOT
    set -e
    /setupAddon
    yarn install --network-timeout 1000000
    yarn build
    rm -rf cache omelette .yarn/cache
EOT

FROM plone/frontend-prod-config:${VOLTO_VERSION}

LABEL maintainer="Plone Collective" \
      org.label-schema.name="ghcr.io/RedTurtle/volto-comuni-chiamo" \
      org.label-schema.description="Volto project with @redturtle/volto-comuni-chiamo" \
      org.label-schema.vendor="RedTurtle"

COPY --from=builder /app/ /app/
