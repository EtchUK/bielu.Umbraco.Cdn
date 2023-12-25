﻿
using bielu.SchemaGenerator.Core.Attributes;
using bielu.Umbraco.Cdn.Core.Constants;
using Newtonsoft.Json;

namespace bielu.Umbraco.Cdn.Cloudflare.Configuration;
[SchemaGeneration]

public class BieluCdnCloudflareOptions
{
    [SchemaPrefix]
    [JsonIgnore]
    public static string SectionName = $"{CdnConstants.CdnConfigSectionName}:Cloudflare";
}