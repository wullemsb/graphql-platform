using System;
using System.Globalization;

namespace HotChocolate;

public static class SchemaErrorBuilderExtensions
{
    public static ISchemaErrorBuilder SetMessage(
        this ISchemaErrorBuilder builder,
        string format,
        params object[] args)
    {
        if (builder is null)
        {
            throw new ArgumentNullException(nameof(builder));
        }

        return builder.SetMessage(string.Format(
            CultureInfo.InvariantCulture,
            format,
            args));
    }

    public static ISchemaErrorBuilder SpecifiedBy(
        this ISchemaErrorBuilder errorBuilder,
        string section,
        bool condition)
    {
        if (condition)
        {
            errorBuilder.SetExtension(
                "specifiedBy",
                "http://spec.graphql.org/October2021/#" + section);
        }

        return errorBuilder;
    }
}
