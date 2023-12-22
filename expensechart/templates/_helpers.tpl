{{- define "mychart.mongo.image.repository" -}}
  {{- default "mongo" .Values.mongo.image.repository | quote -}}
{{- end }}

{{- define "mychart.mongo.image.tag" -}}
  {{- default "latest" .Values.mongo.image.tag | quote -}}
{{- end }}

{{- define "mychart.server.image.repository" -}}
  {{- default "tharunika21/exp-back" .Values.server.image.repository | quote -}}
{{- end }}

{{- define "mychart.server.image.tag" -}}
  {{- default "v1.0" .Values.server.image.tag | quote -}}
{{- end }}

{{- define "mychart.server.replicaCount" -}}
  {{- default 1 .Values.server.replicaCount | quote -}}
{{- end }}