package storage

import (
	"context"
	"fmt"
	"io"
	"time"

	"cloud.google.com/go/storage"
	"google.golang.org/api/option"
)

const (
	timeoutSeconds = 30
)

func Download(gcpCredentialsJSON, bucketName, objectName string) ([]byte, error) {
	ctx := context.Background()

	client, err := storage.NewClient(ctx, option.WithCredentialsJSON([]byte(gcpCredentialsJSON)))
	if err != nil {
		return nil, fmt.Errorf("failed to create client: %v", err)
	}
	defer client.Close()

	ctx, cancel := context.WithTimeout(ctx, time.Second*timeoutSeconds)
	defer cancel()

	storageReader, err := client.
		Bucket(bucketName).
		Object(objectName).
		NewReader(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to create storage reader for %s (%v)", objectName, err)
	}
	defer storageReader.Close()

	data, err := io.ReadAll(storageReader)
	if err != nil {
		return nil, fmt.Errorf("failed to read from bucket: %v", err)
	}

	return data, nil
}
